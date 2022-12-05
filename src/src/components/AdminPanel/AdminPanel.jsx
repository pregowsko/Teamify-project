import React from "react";
import bemCssModule from 'bem-css-modules';
import { default as CoursesStyles } from './Courses.module.scss';
import { useContext } from "react/cjs/react.production.min";
import { StoreContext } from "../../store/StoreProvider";
import CourseDetails from "./subcomponents/CourseDetails";
import CoursePopup from "./subcomponents/CoursePopup";


const AdminPanel = () => {
    const [isOpenPopup, setIsOpenPopup ] = useState(false);
    const { courses } = useContext(StoreContext);

    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = e => {
        if (e) {
            e.preventDefault();
        }
        setIsOpenPopup(false);
    };

    const coursesElements = courses.map(course => <CourseDetails key={course.id} {...course}/>);

    return (
        <section>
            {coursesElements}
            <button onClick={showPopup}>Dodaj nowy kurs</button>
            <CoursePopup isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={hidePopup} />
        </section>
    );
};

export default AdminPanel;