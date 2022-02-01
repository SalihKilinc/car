import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Spacer from '../components/common/Spacer';
import RegisterForm from '../components/auth/RegisterForm';
const RegisterPage = () => {
    return (
        <>
            <PageHeader title="Register" />
            <Spacer />
            <RegisterForm />
            <Spacer />

        </>
    )
};

export default RegisterPage;
