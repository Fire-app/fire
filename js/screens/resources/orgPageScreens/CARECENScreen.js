import React from 'react';
import { useTranslation } from 'react-i18next';
import OrgPageTemplate from '../OrgPageTemplate';

export default function CARECENScreen() {
  const { t } = useTranslation();
  const SERVICES = [
    'DACA renewal',
    'Citizenship consultation',
    'English classes',
  ];

  return (
    <OrgPageTemplate
      name="Central American Resource Center"
      website="https://www.carecen-la.org/"
      phone="tel://2133857800"
      description={t('CARECEN_description')}
      services={SERVICES}
      facebook="https://www.facebook.com/Carecen.LA/"
      instagram="https://www.instagram.com/carecen_la/"
      twitter="https://twitter.com/Carecen_LA"
      youtube={null}
    />
  );
}
