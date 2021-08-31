import React from 'react';
import PropTypes from 'prop-types';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './NotFound.scss';

NotFound.propTypes = {
  
};

function NotFound(props) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Result
        status="404"
        title="404 - Page Not Found!"
        subTitle={t("Sorry, the page you visited does not exist.")}
        extra={
        <Button type="primary">
          <Link to="/">Back to Home</Link>
        </Button>
        }
      />
    </>
  );
}

export default NotFound;