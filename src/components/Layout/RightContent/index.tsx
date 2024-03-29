import { getLocaleStorage, setLocaleStorage } from '@/utils/cookie';
import { Space } from 'kx_component';
import React, { useEffect, useState } from 'react';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';
import { useSelector } from "react-redux"
import Role from './Role';
import Company from './company';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { RoleList, TenantList } = useSelector(({ initialState }: any) => initialState);
  const [list, setList] = useState<object[]>([]);
  const [activited, setActivited] = useState<any>(null);

  const onChangeRole = (item: any) => {
    setActivited(item);
    setLocaleStorage('ROLE_DATA', JSON.stringify(item));
    window.location.href = '/';
  };

  useEffect(() => {
    const localROLE_DATA = getLocaleStorage('ROLE_DATA')
      ? JSON.parse(getLocaleStorage('ROLE_DATA') || '{}')
      : null;
    setList(RoleList);
    setActivited(localROLE_DATA || RoleList?.[0]);
  }, [RoleList])

  const getRoleProps = () => {
    return {
      activited,
      list,
      setActivited,
      onChangeRole,
      setList,
    };
  };

  const getCompanyProps = () => {
    return {
      activited,
      initialState: { TenantList }
    };
  };

  return (
    <Space className={styles.right} size="large">
      <Company {...getCompanyProps()} />
      <Role {...getRoleProps()} />
      <Avatar />
      {/* <SelectLang /> */}
      {/* <SelectColor/> */}
    </Space>
  );
};
export default GlobalHeaderRight;
