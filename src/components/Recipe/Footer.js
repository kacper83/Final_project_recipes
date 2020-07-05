import React from 'react';
import '../../scss/partials/_footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href='https://www.facebook.com/bezmlecznamama'><i className="fab fa-facebook-square fa-3x"></i></a>
                <a href='https://www.instagram.com/bezmlecznadieta'><i className="fab fa-instagram fa-3x"></i></a>
            </div>

            <div className="copyright">
                <p>Copyright by
                    <a href="mailto: kapro@wp.pl"> kapro</a>
                </p>
            </div>
        </div>
    )
};

export default Footer;