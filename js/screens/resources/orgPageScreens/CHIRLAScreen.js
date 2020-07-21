import React from 'react';
import { useTranslation } from 'react-i18next';
import OrgPageTemplate from '../OrgPageTemplate';

export default function CHIRLAScreen() {
  const { t } = useTranslation();
  const SERVICES = [
    'DACA renewal',
    'Citizenship consultation',
    'English classes',
  ];

  return (
    <OrgPageTemplate
      name="Coalition for Humane Immigrant Rights of Los Angeles"
      website="https://chirla.org/"
      phone="tel://8886244752"
      description={t('CHIRLA_description')}
      services={SERVICES}
      facebook="https://www.facebook.com/chirlausa/"
      instagram="https://www.instagram.com/chirla_org/"
      twitter="https://twitter.com/CHIRLA"
      youtube="https://www.youtube.com/channel/UCkpuw8C5tb4RL8IwI-liMsA"
    />
  );
}
