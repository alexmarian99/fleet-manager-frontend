import agent from "../../api/agent";
import { useState, useEffect } from "react";
import CarListItem from "./CarListItem";
import Layout from "../../layout/Layout";

const CarList = () => {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        getData();


    }, [setCars])

    async function getData(){
        const data = await agent.Cars.GetAll();
        console.log(data);
        setCars(data);
    }

    return ( 
        <Layout>
            <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl"
            >
            {/*begin::Post*/}
            <div className="content flex-row-fluid" id="kt_content">
                {/*begin::Card*/}
                <div className="card">
                {/*begin::Card header*/}
                <div className="card-header border-0 pt-6">
                    {/*begin::Card title*/}
                    <div className="card-title">
                    {/*begin::Search*/}
                    <div className="d-flex align-items-center position-relative my-1">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                        <span className="svg-icon svg-icon-1 position-absolute ms-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <rect
                            opacity="0.5"
                            x="17.0365"
                            y="15.1223"
                            width="8.15546"
                            height={2}
                            rx={1}
                            transform="rotate(45 17.0365 15.1223)"
                            fill="black"
                            />
                            <path
                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                            fill="black"
                            />
                        </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <input
                        type="text"
                        data-kt-subscription-table-filter="search"
                        className="form-control form-control-solid w-250px ps-14"
                        placeholder="Search Subscriptions"
                        />
                    </div>
                    {/*end::Search*/}
                    </div>
                    {/*begin::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                    {/*begin::Toolbar*/}
                    <div
                        className="d-flex justify-content-end"
                        data-kt-subscription-table-toolbar="base"
                    >
                        {/*begin::Filter*/}
                        <button
                        type="button"
                        className="btn btn-light-primary me-3"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                        <span className="svg-icon svg-icon-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                fill="black"
                            />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}Filter
                        </button>
                        {/*end::Filter*/}
                        {/*begin::Add car*/}
                        <a
                        href="#"
                        className="btn btn-primary"
                        >
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                        <span className="svg-icon svg-icon-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <rect
                                opacity="0.5"
                                x="11.364"
                                y="20.364"
                                width={16}
                                height={2}
                                rx={1}
                                transform="rotate(-90 11.364 20.364)"
                                fill="black"
                            />
                            <rect
                                x="4.36396"
                                y="11.364"
                                width={16}
                                height={2}
                                rx={1}
                                fill="black"
                            />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}Add Car
                        </a>
                        {/*end::Add car*/}
                    </div>
                    {/*end::Toolbar*/}
                    </div>
                    {/*end::Card toolbar*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                    {/*begin::Table*/}
                    <table
                    className="table align-middle table-row-dashed fs-6 gy-5"
                    id="kt_subscriptions_table"
                    >
                    {/*begin::Table head*/}
                    <thead>
                        {/*begin::Table row*/}
                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                            <th classNameName="min-w-125px">Count</th>
                            <th classNameName="min-w-125px">Car (brand, model)</th>
                            <th classNameName="min-w-125px">User</th>
                            <th classNameName="min-w-125px">Licence Plate Number</th>
                            <th classNameName="min-w-125px">Mileage</th>
                            <th classNameName="min-w-125px">First Registration</th>
                            <th classNameName="text-end min-w-70px">Actions</th>
                        </tr>
                        {/*end::Table row*/}
                    </thead>
                    {/*end::Table head*/}
                    {/*begin::Table body*/}
                    
                    <tbody classNameName="text-gray-600 fw-bold">
                        {cars && cars.map( (car, i) => 
                        <CarListItem car={car} index={i + 1} />
                        )}
                    </tbody>

                    {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                </div>
                {/*end::Card body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Modals*/}
                {/*begin::Modal - Adjust Balance*/}
                <div
                className="modal fade"
                id="kt_subscriptions_export_modal"
                tabIndex={-1}
                aria-hidden="true"
                >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                    {/*begin::Modal header*/}
                    <div className="modal-header">
                        {/*begin::Modal title*/}
                        <h2 className="fw-bolder">Export Subscriptions</h2>
                        {/*end::Modal title*/}
                        {/*begin::Close*/}
                        <div
                        id="kt_subscriptions_export_close"
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        >
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                        <span className="svg-icon svg-icon-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <rect
                                opacity="0.5"
                                x={6}
                                y="17.3137"
                                width={16}
                                height={2}
                                rx={1}
                                transform="rotate(-45 6 17.3137)"
                                fill="black"
                            />
                            <rect
                                x="7.41422"
                                y={6}
                                width={16}
                                height={2}
                                rx={1}
                                transform="rotate(45 7.41422 6)"
                                fill="black"
                            />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        </div>
                        {/*end::Close*/}
                    </div>
                    {/*end::Modal header*/}
                    {/*begin::Modal body*/}
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        {/*begin::Form*/}
                        <form id="kt_subscriptions_export_form" className="form" action="#">
                        {/*begin::Input group*/}
                        <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-5 fw-bold form-label mb-5">
                            Select Export Format:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                            data-control="select2"
                            data-placeholder="Select a format"
                            data-hide-search="true"
                            name="format"
                            className="form-select form-select-solid"
                            >
                            <option value="excell">Excel</option>
                            <option value="pdf">PDF</option>
                            <option value="cvs">CVS</option>
                            <option value="zip">ZIP</option>
                            </select>
                            {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-5 fw-bold form-label mb-5">
                            Select Date Range:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                            className="form-control form-control-solid"
                            placeholder="Pick a date"
                            name="date"
                            />
                            {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Row*/}
                        <div className="row fv-row mb-15">
                            {/*begin::Label*/}
                            <label className="fs-5 fw-bold form-label mb-5">
                            Payment Type:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Radio group*/}
                            <div className="d-flex flex-column">
                            {/*begin::Radio button*/}
                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                defaultChecked="checked"
                                name="payment_type"
                                />
                                <span className="form-check-label text-gray-600 fw-bold">
                                All
                                </span>
                            </label>
                            {/*end::Radio button*/}
                            {/*begin::Radio button*/}
                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                                name="payment_type"
                                />
                                <span className="form-check-label text-gray-600 fw-bold">
                                Visa
                                </span>
                            </label>
                            {/*end::Radio button*/}
                            {/*begin::Radio button*/}
                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={3}
                                name="payment_type"
                                />
                                <span className="form-check-label text-gray-600 fw-bold">
                                Mastercard
                                </span>
                            </label>
                            {/*end::Radio button*/}
                            {/*begin::Radio button*/}
                            <label className="form-check form-check-custom form-check-sm form-check-solid">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={4}
                                name="payment_type"
                                />
                                <span className="form-check-label text-gray-600 fw-bold">
                                American Express
                                </span>
                            </label>
                            {/*end::Radio button*/}
                            </div>
                            {/*end::Input group*/}
                        </div>
                        {/*end::Row*/}
                        {/*begin::Actions*/}
                        <div className="text-center">
                            <button
                            type="reset"
                            id="kt_subscriptions_export_cancel"
                            className="btn btn-light me-3"
                            >
                            Discard
                            </button>
                            <button
                            type="submit"
                            id="kt_subscriptions_export_submit"
                            className="btn btn-primary"
                            >
                            <span className="indicator-label">Submit</span>
                            <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                            </button>
                        </div>
                        {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                    </div>
                    {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - New Card*/}
                {/*end::Modals*/}
            </div>
            {/*end::Post*/}
            </div>

        </Layout>
     );
}
 
export default CarList;