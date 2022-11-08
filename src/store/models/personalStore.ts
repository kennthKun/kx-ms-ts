import request from '@/utils/request';
import { API } from '@/const';

const personalStore = {
  state: {
    activityItem: {
      title: "基础设置",
      index: 0
    },
    leftData: [{
      title: "基础设置",
      index: 0
    }, {
      title: "安全设置",
      index: 1
    }, {
      title: "分享设置",
      index: 2
    }]
  },
  reducers: {
    updateState(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    // 获取分享token
    async getShareToken(hours: number) {
      const res = await request(`${API.auth}/oauth/share/token?valid_time=${hours}`, {
        method: `post`,
      })
      return res
    }
  },
};

export default personalStore;
