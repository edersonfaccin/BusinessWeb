import { Spin } from "antd"
import SignIn from "../../pages/signin"
import useAuthData from "../data/hook/useAuthData"

const ForceAuth = (props: any) => {

    const { user, loading } = useAuthData()

    const renderContent = () => {
        return (
            <Spin tip="Aguarde" spinning={loading}>
              { props.children }
            </Spin>
        )
    }

    if(user?.email){
        return renderContent()
    }else{
        return <SignIn/>
    }
}

export default ForceAuth