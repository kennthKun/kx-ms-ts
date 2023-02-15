import styles from '../index.module.less';
import { Col, Form, Input, Row, Select, Button, Checkbox, message } from 'kx_component';
import { clearCookie, setCookie } from '@/utils/cookie';
import { getFakeCaptcha, postLogin } from '@/services/login';
import { useEffect, useState } from 'react';
import { API_ENV } from "@/const/env"
import { useDispatch } from "react-redux"

const FormItem = Form.Item;
const { Option } = Select;
const CODE_TIME_NUM = 60;
const PhoneLoginWapper = ({ seeAgreement, setType, setTenantList }: any) => {
  const [form] = Form.useForm();
  const [checked, setchecked] = useState(true);
  const [phoneIsError, setPhoneIsError] = useState<boolean>(false);
  const [codeIsError, setCodeIsError] = useState<boolean>(false);
  const [verifyButtonTime, setverifyButtonTime] = useState<number>(CODE_TIME_NUM);
  const [codeBtnState, setCodeBtnState] = useState<boolean>(false);

  const {
    initialState
  }: any = useDispatch();

  useEffect(() => {
    clearCookie('AILIEYUN_ACCESS_TOKEN');
  }, []);

  // 判断手机号
  const PhoneRegFun = (phone: string) => {
    const phoneRegExp = /^1[3-9]\d{9}$/;
    setPhoneIsError(!phoneRegExp.test(phone));
    return !phoneRegExp.test(phone);
  };

  // 判断验证码
  const CodeRegFun = (code: string) => {
    setCodeIsError(!code);
    return !code;
  };

  const onValuesChange = (e: any) => {
    if (e.phone) {
      PhoneRegFun(e.phone);
    }
  };

  // 获取验证码
  const getFakeCaptchaFun = () => {
    const mobile: string = form.getFieldValue('phone');
    if (PhoneRegFun(mobile)) {
      return;
    }
    setCodeBtnState(true);
    setTimeout(async () => {
      if (CODE_TIME_NUM === verifyButtonTime) {
        const result: any = await getFakeCaptcha(mobile);
        if (result.code === 0) {
          ['dev', 'test', 'dev2', 'test2'].includes(API_ENV)
            ? message.success(`验证码为${result?.data}`)
            : message.success('获取验证码成功！');
        } else {
          setCodeBtnState(false);
          setverifyButtonTime(CODE_TIME_NUM);
          return;
        }
      }
      if (verifyButtonTime === 0) {
        setCodeBtnState(false);
        setverifyButtonTime(CODE_TIME_NUM);
        return;
      }
      setverifyButtonTime(verifyButtonTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (verifyButtonTime !== CODE_TIME_NUM) {
      getFakeCaptchaFun();
    }
  }, [verifyButtonTime]);

  const onFinish = async (values: any) => {
    if (!checked) {
      message.info('请勾选协议后登录');
      return;
    }
    if (!PhoneRegFun(values.phone) && !CodeRegFun(values.code)) {
      const res: any = await postLogin({
        phone: values.phone,
        principal: values.code,
      });
      if (res?.code !== undefined) {
        message.error(res.msg);
      } else {
        setCookie('AILIEYUN_ACCESS_TOKEN', `${res.token_type} ${res.access_token}`, 7);

        const TenantListData = await initialState?.getTenantListFun?.();
        // if (TenantListData?.length <= 0) {
        //   setType(3);
        //   return
        // }
        if (TenantListData?.length > 1) {
          setType(2);
          setTenantList(TenantListData);
        } else {
          await initialState?.getRoleListFun?.();
          await initialState?.fetchUserInfo?.();
          message.success('登录成功！');
          window.location.href = '/';
        }

        return;
      }
    }
  };

  return (
    <>
      <Form onValuesChange={onValuesChange} onFinish={onFinish} form={form}>
        <FormItem>
          <Input.Group className={phoneIsError ? 'kx_phone error' : 'kx_phone'}>
            <Row style={{ width: '100%' }}>
              <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                <Select defaultValue="+86">
                  <Option value="+86">+86</Option>
                </Select>
              </Col>
              <Col span={20}>
                <FormItem noStyle name="phone">
                  <Input maxLength={11} style={{ border: 'none' }} placeholder="请输入手机号" />
                </FormItem>
              </Col>
            </Row>
          </Input.Group>
          {phoneIsError && <div className="phoneIsError">请输入有效的手机号</div>}
        </FormItem>
        <FormItem>
          <FormItem name="code" noStyle>
            <Input
              className={codeIsError ? 'kx_code error' : 'kx_code'}
              placeholder="请输入验证码"
              suffix={
                <Button
                  onClick={() => getFakeCaptchaFun()}
                  className="kx_code_btn"
                  disabled={codeBtnState}
                >
                  {verifyButtonTime !== CODE_TIME_NUM
                    ? `${verifyButtonTime}秒后重新获取`
                    : '发送验证码'}
                </Button>
              }
            />
          </FormItem>
          {codeIsError && <div className="phoneIsError">请输入验证码</div>}
        </FormItem>

        <Button type="primary" htmlType="submit" className={styles.login_btn}>
          登录
        </Button>
      </Form>
      <div className={styles.agreement}>
        <Checkbox checked={checked} onChange={(e: any) => setchecked(e.target.checked)}>
          登录即同意
        </Checkbox>
        <a onClick={() => seeAgreement('/user/protocol')}>《用户协议》</a>和
        <a onClick={() => seeAgreement('/privacy/policy')}>《隐私政策》</a>
      </div>
    </>
  );
};

export default PhoneLoginWapper;
