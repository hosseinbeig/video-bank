import axios from 'axios';

const KEY = 'AIzaSyDpfNrrPmMYEDPCvX4Sz919cEgqojOuqq4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResault: 5,
    key: KEY
  }
});
