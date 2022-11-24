import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { companyRules, ICompanyDefault } from '../src/models/ICompanyModel';
import { CREATE_COMPANY, GET_COMPANY, UPDATE_COMPANY } from '../src/graphql/company';
import { Button, Col, Row } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const Company = () => {
  
  return (
    <CustomMenu>
      <CustomForm list='companies' create={CREATE_COMPANY} update={UPDATE_COMPANY} 
        get={GET_COMPANY} defaultData={ICompanyDefault}>
        <Row>
          <Col flex={1}>
            <Button type="primary" htmlType="submit" 
              icon={<UserAddOutlined />}>
                Gerenciar usuarios
            </Button>
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='Nome' 
              property="name"
              rules={companyRules.name}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Nome fantasia' 
              property="nick_name"
              rules={companyRules.nick_name}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='CNPJ' 
              property="national_identifier"
              rules={companyRules.national_identifier}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Inscricao estadual' 
              property="state_identifier"
              rules={companyRules.state_identifier}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Inscricao municipal' 
              property="municipal_identifier"
              rules={companyRules.municipal_identifier}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='Endereco' 
              property="address"
              rules={companyRules.address}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Complemento' 
              property="complement"
              rules={companyRules.complement}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='Bairro' 
              property="district"
              rules={companyRules.district}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='CEP' 
              property="zip_code"
              rules={companyRules.zip_code}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Cidade' 
              property="city"
              rules={companyRules.city}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='Fone' 
              property="phone"
              rules={companyRules.phone}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Celular' 
              property="cellphone"
              rules={companyRules.cellphone}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <TextInput 
              label='Email' 
              property="email"
              rules={companyRules.email}
            />
          </Col>
          <Col flex={1}>
            <TextInput 
              label='Contato' 
              property="contact"
              rules={companyRules.contact}
            />
          </Col>
        </Row>
        
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Company