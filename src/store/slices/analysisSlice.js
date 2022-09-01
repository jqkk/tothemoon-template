import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { requestGet } from '../../utils/httpClient';
import { BASE_URL, PATH } from '../../constants/api';

const dataFetchingAction = createAction('analysis/dataFetching');

const initialState = {
  url: '',
  loading: false,
  timelines: [],
  videoInfo: { title: '', date: '', view: '', like: '' },
  interest: [],
  keywords: { b5: [], comments: [[]] },
  comments: {
    comments: [[], [], [], [], [], [], [], [], []],
    percent: {
      positive: 0,
      negative: 0,
      happy: 0,
      surprise: 0,
      anger: 0,
      sadness: 0,
      neutral: 0,
      disgust: 0,
      fear: 0,
    },
  },
};

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

export const dataFetching = createAsyncThunk(
  dataFetchingAction,
  async (url) => {
    try {
      await wait(5000);
      const [timelines, videoInfo, interest, keywords, comments] =
        await Promise.all([
          requestGet(BASE_URL + PATH.TIMELINE),
          requestGet(BASE_URL + PATH.VIDEOINFO),
          requestGet(BASE_URL + PATH.INTEREST),
          requestGet(BASE_URL + PATH.KEYWORDS),
          requestGet(BASE_URL + PATH.COMMENTS),
        ]);
      return { timelines, videoInfo, interest, keywords, comments, url };
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
);

const analaysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dataFetching.pending, (state) => {
        state.loading = true;
      })
      .addCase(dataFetching.fulfilled, (state, action) => {
        return { ...state, ...action.payload, loading: false };
      });
  },
});

export default analaysisSlice;
