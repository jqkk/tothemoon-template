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
  comments: [
    {
      index: '0',
      id: '',
      comment: '',
    },
    {
      index: '1',
      id: '',
      comment: '',
    },
    {
      index: '2',
      id: '',
      comment: '',
    },
    {
      index: '3',
      id: '',
      comment: '',
    },
    {
      index: '4',
      id: '',
      comment: '',
    },
    {
      index: '5',
      id: '',
      comment: '',
    },
    {
      index: '6',
      id: '',
      comment: '',
    },
    {
      index: '7',
      id: '',
      comment: '',
    },
    {
      index: '8',
      id: '',
      comment: '',
    },
    {
      index: '9',
      positivePercent: 14.3,
    },
    {
      index: '10',
      negativePercent: 14.3,
    },
    {
      index: '11',
      happyPercent: 14.3,
    },
    {
      index: '12',
      surprisedPercent: 14.3,
    },
    {
      index: '13',
      angerPercent: 14.3,
    },
    {
      index: '14',
      sadnessPercent: 14.3,
    },
    {
      index: '15',
      neutralPercent: 14.3,
    },
    {
      index: '16',
      disgustPercent: 14.3,
    },
    {
      index: '17',
      fearPercent: 14.3,
    },
  ],
};

// const wait = (timeToDelay) =>
//   new Promise((resolve) => setTimeout(resolve, timeToDelay));

export const dataFetching = createAsyncThunk(
  dataFetchingAction,
  async (url) => {
    try {
      // await wait(5000);
      const [timelines, videoInfo, interest, keywords, comments] =
        await Promise.all([
          requestGet(BASE_URL + PATH.TIMELINE + url),
          requestGet(BASE_URL + PATH.VIDEOINFO + url),
          requestGet(BASE_URL + PATH.INTEREST + url),
          requestGet(BASE_URL + PATH.KEYWORDS + url),
          requestGet(BASE_URL + PATH.COMMENTS + url),
        ]);
      console.log(videoInfo);
      return {
        timelines,
        videoInfo: videoInfo[0],
        interest,
        keywords,
        comments,
        url,
      };
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
