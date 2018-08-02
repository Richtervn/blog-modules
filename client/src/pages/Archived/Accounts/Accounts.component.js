import React from 'react';

import PageContainer from 'common/PageContainer';
import { VerifyModal } from './Modals';
import AccountsPage from './AccountsPage.container';

export default ({ isVerify }) => (
  <PageContainer>
    {isVerify && <AccountsPage />}
    {!isVerify && <VerifyModal />}
  </PageContainer>
);
