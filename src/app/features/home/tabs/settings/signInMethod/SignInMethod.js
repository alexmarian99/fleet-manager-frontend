import { useState } from "react";
import EditPasswordFrom from "./EditPasswordForm";

const SignInMethod = () => {
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    return (
        <div className="card mb-5 mb-xl-10">
                {/*begin::Card header*/}
                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Sign-in Method</h3>
                    </div>
                </div>
                {/*end::Card header*/}
                {/*begin::Content*/}
                <div id="kt_account_settings_signin_method" className="collapse show">
                    {/*begin::Card body*/}
                    <div className="card-body border-top p-9">
                        {/*begin::Email Address*/}
                        <div className="d-flex flex-wrap align-items-center">
                            {/*begin::Label*/}
                            <div id="kt_signin_email">
                                <div className="fs-6 fw-bolder mb-1">Email Address</div>
                                <div className="fw-bold text-gray-600">support@keenthemes.com</div>
                            </div>
                            {/*end::Label*/}
                            {/*begin::Edit*/}
                            {/* <EditPasswordFrom /> */}
                            {/*end::Edit*/}
                            {/*begin::Action*/}
                            <div id="kt_signin_email_button" className="ms-auto">
                                <button className="btn btn-light btn-active-light-primary">Change Email</button>
                            </div>
                            {/*end::Action*/}
                        </div>
                        {/*end::Email Address*/}

                        <div className="separator separator-dashed my-6" />

                        <div className="d-flex flex-wrap align-items-center mb-10">
                            {!isEditingPassword && 
                                <>
                                    <div id="kt_signin_password">
                                        <div className="fs-6 fw-bolder mb-1">Password</div>
                                        <div className="fw-bold text-gray-600">************</div>
                                    </div>
                                    <div id="kt_signin_password_button" className="ms-auto">
                                        <button className="btn btn-light btn-active-light-primary" onClick={() => setIsEditingPassword(true)}>Reset Password</button>
                                    </div>
                                </>
                            }
                            {isEditingPassword && <EditPasswordFrom closeForm={() => setIsEditingPassword(false)} />}
                        </div>
                        {/*end::Password*/}
                        {/*begin::Notice*/}
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                            {/*begin::Icon*/}
                            {/*begin::Svg Icon | path: icons/duotune/general/gen048.svg*/}
                            <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black" />
                                    <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black" />
                                </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            {/*end::Icon*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                {/*begin::Content*/}
                                <div className="mb-3 mb-md-0 fw-bold">
                                    <h4 className="text-gray-900 fw-bolder">Secure Your Account</h4>
                                    <div className="fs-6 text-gray-700 pe-7">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</div>
                                </div>
                                {/*end::Content*/}
                                {/*begin::Action*/}
                                <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable</a>
                                {/*end::Action*/}
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Notice*/}
                    </div>
                    {/*end::Card body*/}
                </div>
                {/*end::Content*/}
            </div>
    )
}

export default SignInMethod;