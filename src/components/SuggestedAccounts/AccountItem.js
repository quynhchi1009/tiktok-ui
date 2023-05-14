import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7b294b686fbf90c487b11d17998ee1e5.jpeg?x-expires=1684234800&x-signature=fI8%2BNHiNvpGi54BMe4jsr7gX2lg%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Nickname</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Name</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.protoTypes = {};

export default AccountItem;
