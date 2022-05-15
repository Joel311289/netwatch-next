import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';
import { APITVDetail, TVDetail } from '@/types';
import {
  aggregateCreditsMapper,
  externalIdsMapper,
  httpInterceptor,
  imagesMapper,
  regionFromLocale,
  seasonMapper,
  tvDetailMapper,
  typeFromMedia,
  videosMapper,
  watchProvidersMapper
} from '@/utils/api';
import { getPropValue } from '@/utils/helpers';

type APIData = APITVDetail;
type Data = TVDetail;

httpInterceptor();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { tvId, language, ...params } = req.query;

  axios
    .get(`${process.env.API_URL}/tv/${tvId}`, {
      params: {
        ...params,
        append_to_response: 'external_ids,aggregate_credits,watch/providers,videos,images',
        include_image_language: `${language},null`,
        include_video_language: `${language},null`
      }
    })
    .then((response: AxiosResponse<APIData>) => {
      const data: APIData = response.data;

      res.status(200).json({
        ...tvDetailMapper(data),
        seasons: getPropValue(data, 'seasons', []).map(seasonMapper),
        external_ids: externalIdsMapper(getPropValue(data, 'external_ids'), typeFromMedia(data)),
        'watch/providers': watchProvidersMapper(
          getPropValue(data, 'watch/providers'),
          regionFromLocale(language as string)
        ),
        images: imagesMapper(getPropValue(data, 'images')),
        videos: videosMapper(getPropValue(data, 'videos')),
        credits: aggregateCreditsMapper(getPropValue(data, 'aggregate_credits'))
      });
    });
}
