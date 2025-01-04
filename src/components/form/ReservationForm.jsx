import React, { useRef, useState } from 'react';
import CustomSelect from '../select/CustomSelect';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

const ReservationForm = ({ btnClass }) => {

    const personOptions = [
        { value: '1', label: '1 Person' },
        { value: '2', label: '2 Person' },
        { value: '3', label: '3 Person' },
        { value: '4', label: '4 Person' },
        { value: '5', label: '5 Person' },
    ]

    const scheduleOptions = [
        { value: '10', label: '10:00 AM' },
        { value: '11', label: '11:00 AM' },
        { value: '12', label: '12:00 PM' },
        { value: '1', label: '1:00 PM' },
        { value: '2', label: '2:00 PM' },
    ]

    const handleBooking = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Booking")
    }

    const [startDate, setStartDate] = useState(null);
    const datePickerRef = useRef(null);

    return (
        <>
            <form onSubmit={handleBooking} className='with-label'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" id="phone" name="phone" placeholder="+4733378901" type="text" autoComplete='off' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="subject">Person</label>
                            <CustomSelect options={personOptions} selectValue="2" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group date date-picker-one">
                            <label htmlFor="date">Date</label>
                            <ReactDatePicker
                                id='schedule'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                placeholderText="Date"
                                ref={datePickerRef}
                            />
                            <span
                                className="input-group-addon"
                                onClick={() => datePickerRef.current.setFocus()}
                            >
                                <i className="fas fa-calendar-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <CustomSelect options={scheduleOptions} selectValue="2" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" className={`${btnClass}`}>
                            Book A Table
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReservationForm;