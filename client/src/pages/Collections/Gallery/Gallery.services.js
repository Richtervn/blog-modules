import { serviceCaller } from 'helpers';

const { commonGet } = serviceCaller;

export default {
  getGallery() {
    const data = commonGet('gallery');
    return data;
  }
};
