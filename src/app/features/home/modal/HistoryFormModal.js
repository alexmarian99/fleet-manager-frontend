import { useEffect, useState, useContext } from "react";
import UserContext from "../../../context/user-context";
import agent from "../../../api/agent";
import EmptyIlustration from "../../../../assets/media/illustrations/sigma-1/1.png";
import TicketPlaceholder from "../../../../assets/img/ticket-placeholder.png";
import AppInput from "../../../layout/appComponents/AppInput";
import AppSelect from "../../../layout/appComponents/AppSelect";
import LoadingButton from "../../../layout/appComponents/LoadingButton";
import AppTextArea from "../../../layout/appComponents/AppTextArea";
import Utils from "../../../utils/utils";
import utils from "../../../utils/utils";
import AppDate from "../../../layout/appComponents/AppDate";
import AppSwitch from "../../../layout/appComponents/AppSwitch";

const TicketFormModal = ({ closeModal, isSubmitting, solveTicket, ticketFormData }) => {
    const userCtx = useContext(UserContext);

    const initialHistoryFormValueState = {
        userId: ticketFormData.userId,
        carId: ticketFormData.carId,
        title: ticketFormData.title,
        imagePath: ticketFormData.imagePath,
        details: ticketFormData.details,
        cost: ticketFormData.cost,
        serviceType: ticketFormData.type,
        ticketStatus: ticketFormData.ticketStatus,
        executionDate: ticketFormData.date,
        mileageAtExecution: "",
        renewDate: "",
        isPayed: false,
        adminId: userCtx.user.id,
        ticketId: ticketFormData.id
    }

    // console.log(initialHistoryFormValueState);
    // console.log(ticketFormData);

    const [historyFormValues, setHistoryFormValues] = useState(initialHistoryFormValueState);

    const isValidForm = () => initialHistoryFormValueState.title !== "" && initialHistoryFormValueState.details !== "" && initialHistoryFormValueState.type !== "" &&
        initialHistoryFormValueState.status !== "";


    const handleHistoryFromValuesChange = (event) => {
        const { name, value } = event.target;
        setHistoryFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleCheckboxChange = () => {
        setHistoryFormValues(prevState => {
            return {
                ...prevState,
                isPayed: !prevState.isPayed
            }
        });
        console.log(historyFormValues);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!isValidForm()) return;
        solveTicket(historyFormValues);
    }

    const escFunction = event => {
        if (event.keyCode === 27) closeModal();
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => document.removeEventListener("keydown", escFunction, false);
    }, []);

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }}
            id="kt_modal_users_search"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="fw-bolder text-center">Solve Ticket</h2>
                        <div className="btn btn-icon btn-sm btn-active-icon-primary" onClick={closeModal}>
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
                        </div>
                    </div>
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        <form id="kt_modal_add_user_form" className="form" onSubmit={handleSubmit}>
                            <div
                                className="d-flex flex-column scroll-y me-n7 pe-7"
                                id="kt_modal_add_user_scroll"
                                data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}"
                                data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                data-kt-scroll-offset="300px"
                            >
                                <div className="fv-row mb-7">
                                    <label className="d-block fw-bold fs-6 mb-5">{initialHistoryFormValueState.imagePath ? "Image" : "No Image"}</label>
                                    {initialHistoryFormValueState.imagePath !== "" &&
                                        <img src={initialHistoryFormValueState.imagePath} />
                                    }

                                    {/* <div
                                        className={`image-input image-input-outline ${!initialHistoryFormValueState.imagePath && 'image-input-empty'}`}
                                        data-kt-image-input="true"
                                        style={{
                                            backgroundImage: `url(${TicketPlaceholder})`
                                        }}
                                    >
                                        <div
                                            className="image-input-wrapper w-125px h-125px"
                                            style={{
                                                backgroundImage: initialHistoryFormValueState.imagePath ? `url(${initialHistoryFormValueState.imagePath})` : 'none' // !userImage and backgroundImage none
                                            }}
                                        />
                                    </div>
                                    <div className="form-text">
                                        Allowed file types: png, jpg, jpeg.
                                    </div> */}
                                </div>
                                <div className="row g-9 mb-8">
                                    <div className="col-md-6 fv-row">
                                        <div className="fs-6 fw-bold mb-2">Title:</div>
                                        <div className="d-flex align-items-center">{historyFormValues.title}</div>
                                    </div>
                                    <div className="col-md-6 fv-row">
                                        <div className="fw-bold fs-6 mb-2">Date: </div>
                                        <div className="fw-bold fs-6 mb-2">{new Date(historyFormValues.executionDate).toISOString().split('T')[0]}</div>
                                    </div>
                                </div>
                                <div className="row g-9 mb-8">
                                    {/* <div className="col-md-6 fv-row"> */}
                                    <div className="fs-6 fw-bold mb-2">Details:</div>
                                    <div className="d-flex align-items-center">{historyFormValues.details}</div>
                                    {/* </div> */}
                                </div>
                                <div className="row g-9 mb-8">
                                    <div className="col-md-6 fv-row">
                                        <div className="fs-6 fw-bold mb-2">Service Type:</div>
                                        <div className="d-flex align-items-center">{utils.Services.ServiceType(historyFormValues.serviceType)}</div>
                                    </div>
                                    <div className="col-md-6 fv-row">
                                        <div className="fw-bold fs-6 mb-2">Cost: </div>
                                        <div className="fw-bold fs-6 mb-2">{historyFormValues.cost}€</div>
                                    </div>
                                </div>

                                <AppInput
                                    label="Mileage at Execution"
                                    name="mileageAtExecution"
                                    placeholder="Mileage"
                                    type="number"
                                    value={historyFormValues.mileageAtExecution}
                                    onChange={handleHistoryFromValuesChange}
                                />

                                <AppInput
                                    label="Renewal Date"
                                    name="renewDate"
                                    placeholder="Renewal Date"
                                    type="date"
                                    // value={new Date(historyFormValues.executionDate).toISOString().split('T')[0]}
                                    value={historyFormValues.executionDate}
                                    onChange={handleHistoryFromValuesChange}
                                />

                                <AppSwitch
                                    label="Paid"
                                    name="isPayed"
                                    value={historyFormValues.isPayed}
                                    onChange={handleCheckboxChange}
                                />

                                {/* <AppSelect label="Type" name="ticketType" value={historyFormValues.ticketType} onChange={handleHistoryFromValuesChange}
                                    options={serviceList}
                                /> */}
                            </div>
                            <div className="text-center pt-15">
                                <button
                                    type="reset"
                                    className="btn btn-light me-3"
                                    onClick={closeModal}
                                >
                                    Discard
                                </button>
                                <LoadingButton isSubmitting={isSubmitting} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketFormModal;