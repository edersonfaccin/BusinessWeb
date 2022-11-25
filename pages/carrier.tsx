import { Col, Row } from 'antd';
import React from 'react';
import CustomTabForm from '../src/components/customTabForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import { CREATE_CARRIER, GET_CARRIER, UPDATE_CARRIER } from '../src/graphql/carrier';
import { carrierRules, ICarrierDefault } from '../src/models/ICarrierModel';
import CustomMenu from '../src/utils/customMenu';

const Carrier = () => {

    const tabs = [{
        label: 'Dados',
        key: 'data',
        children: (
            <>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='Nome' 
                            property="name"
                            rules={carrierRules.name}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Nome fantasia' 
                            property="nick_name"
                            rules={carrierRules.nick_name}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='CNPJ' 
                            property="national_identifier"
                            rules={carrierRules.national_identifier}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Inscricao estadual' 
                            property="state_identifier"
                            rules={carrierRules.state_identifier}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Inscricao municipal' 
                            property="municipal_identifier"
                            rules={carrierRules.municipal_identifier}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='Endereco' 
                            property="address"
                            rules={carrierRules.address}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Complemento' 
                            property="complement"
                            rules={carrierRules.complement}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='Bairro' 
                            property="district"
                            rules={carrierRules.district}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='CEP' 
                            property="zip_code"
                            rules={carrierRules.zip_code}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Cidade' 
                            property="city"
                            rules={carrierRules.city}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='Fone' 
                            property="phone"
                            rules={carrierRules.phone}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Celular' 
                            property="cellphone"
                            rules={carrierRules.cellphone}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <TextInput 
                            label='Email' 
                            property="email"
                            rules={carrierRules.email}
                        />
                    </Col>
                    <Col flex={1}>
                        <TextInput 
                            label='Contato' 
                            property="contact"
                            rules={carrierRules.contact}
                        />
                    </Col>
                </Row>
                
                <SwitchInput 
                    label='Ativo' 
                    property='active'
                />
            </>
        )
    }, {
        label: 'Contas bancarias',
        key: 'banks',
        children: (
            <>
                contas bancarias
            </>
        )
    }, {
        label: 'Pix',
        key: 'pix',
        children: (
            <>
                pix
            </>
        )
    }]

    return (
        <CustomMenu>
            <CustomTabForm 
                list='carriers' 
                create={CREATE_CARRIER} 
                update={UPDATE_CARRIER} 
                get={GET_CARRIER} 
                defaultData={ICarrierDefault}
                tabs={tabs}/>
        </CustomMenu>
    )
}

export default Carrier