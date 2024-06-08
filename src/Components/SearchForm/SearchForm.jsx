import { Formik, Form, Field } from 'formik';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query === '') {
          return;
        }
        onSearch(values.query);
        values.query = '';
        actions.resetForm;
      }}
    >
      <Form className={css.container}>
        <Field
          className={css.textInput}
          type="text"
          name="query"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
