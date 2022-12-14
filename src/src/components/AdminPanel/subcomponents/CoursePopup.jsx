import React, { useState } from "react";
import bemCssModule from 'bem-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';
import { default as CoursePopupStyles } from './CoursePopup.module.scss';
import { useContext } from "react/cjs/react.production.min";
import { StoreContext } from "../../store/StoreProvider";
import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";
import AdminPanel from "../AdminPanel/AdminPanel";
import Modal from '../../Modal/Modal';
import request from "../../../helpers/request";

const style = bemCssModule(ContentStyles);

const CoursePopup = ({
    authors = [],
    hidePopup,
    isEditMode = true,
    isOpenPopup,
    id,
    img = '',
    price = 0,
    title = '',
}) => {
    const [formAuthors, setFormAuthors] = useState(authors);
    const {formAuthor, setAuthor} = useState('');
    const [formImg, setFormImg] = useState(img);
    const [formPrice, setFormPrice] = useState(price);
    const [formTitle, setFormTitle] = useState(title);

    const {setCourses} = useContext(StoreContext);

    const handleOnChangeAuthor = e => setAuthor(e.target.value);
    const handleOnChangeImg = e => setFormImg(e.target.value);
    const handleOnChangePrice = e => setFormPrice(e.target.value);
    const handleOnChangeTitle = e => setFormTitle(e.target.value);

    const handleOnSubmit = async e => {
        e.preventDefault();

        const courseObject = {
            authors: formAuthors,
            id,
            img: formImg,
            price: Number(formPrice),
            title: formTitle,
        };

        if (isEditMode) {
            const { data, status } = await request.put('/courses', courseObject);

            if (status === 202) {
                setCourses(data.courses);
            }
        } else {
            const { data, status } = await request.post('/courses', courseObject);

            if(status === 201) {
                setCourses(data.courses);
            }
        }

        hidePopup();
    };

    const addAuthor = e => {
        e.preventDefault();

        setFormAuthors(prev => [...prev, formAuthor]);
        setAuthor('');
    };

    const deleteAuthor = e => {
        const authorToDelete = e.target.dataset.author;
        setFormAuthors(prev => prev.filter(author => author !== authorToDelete));
    };

    const authorsElements = formAuthor.map(author => (
        <li key={author}>
            <p>{author}</p>
            <button data-author={author} onClick={deleteAuthor}>Usu??</button>
        </li>
    ));

    const correctLabel = isEditMode ? 'Aktualizuj kurs' : 'Utw??rz kurs';

    return (
        <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
            <div className={style()}>
                <form className={style('form')} method="submit" onSubmit={handleOnSubmit}>
                    <div className={style('form-row')}>
                        <label>
                            Autor:
                            <input type="text" className={style('input')} value={formAuthor} onChange={handleOnChangeAuthor}/>
                            <button onClick={addAuthor}>Dodaj autora</button>
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Obrazek url:
                            <input type="text" className={style('input')} value={formImg} onChange={handleOnChangeImg}/>
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Cena:
                            <input type="number" className={style('input')} value={formPrice} onChange={handleOnChangePrice}/>
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Tytu??:
                            <input type="text" className={style('input')} value={formTitle} onChange={handleOnChangeTitle}/>
                        </label>
                    </div>
                    <button type="submit">{correctLabel}</button>
                    <button onClick={hidePopup} type="button">Anuluj</button>
                </form>
                <p>Lista autor??w:</p>
                <ul>
                    {authorsElements}
                </ul>
            </div>
        </Modal>
    );
};

export default CoursePopup;