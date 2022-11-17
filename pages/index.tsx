import { Col, Row } from 'antd';
import React from 'react';
import CustomForm from '../src/components/customForm';
import CustomList from '../src/components/customList';
import CustomMenu from '../src/utils/customMenu';

export default function Inxex() {

  return (
    <CustomMenu>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={6}>Estoque</Col>
        <Col span={6}>Fiscal</Col>
        <Col span={6}>Financeiro</Col>
        <Col span={6}>Vendas</Col>
      </Row>
    </CustomMenu>
  )
}