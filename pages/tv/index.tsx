import type { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { MediaType } from '@/types';
import { useI18n } from '@/hooks/useI18n';
import { MediaPagination } from '@/containers/MediaPagination';
import { Container, Space } from '@/components/layout';
import { Heading } from '@/components/typography';

const TVPage: NextPage = () => {
  const { t } = useI18n('tv');

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
      </Head>

      <Container margins>
        <Space direction="column" gap={20} style={{ marginTop: 30 }}>
          <Heading level={2}>{t('tv.title')}</Heading>

          <MediaPagination mediaType={MediaType.TV} />
        </Space>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(String(locale), ['common', 'tv']))
  }
});

export default TVPage;
