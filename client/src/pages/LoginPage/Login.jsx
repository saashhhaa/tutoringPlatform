import { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { API_URL } from '../../api';

export const Login = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'Login failed');

      localStorage.setItem('jwt', data.token);
      window.dispatchEvent(new Event("storage"));
      navigate('/');
    } catch {
      setError('Server error');
    }
  };

  const handleRegister = async () => {
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'Registration failed');

      localStorage.setItem('jwt', data.token);
      window.dispatchEvent(new Event("storage"));
      navigate('/');
    } catch {
      setError('Server error');
    }
  };

  return (
    <div>
      <nav className={styles.loginNav}>
        <Link to="/#heroPage" className={styles.logoFlex}>
          <img src="./logoIcon.svg" alt="" className={styles.logoIcon} />
          <div className={styles.logoTitle}>{t('nav.title')}</div>
        </Link>
        <div className={styles.langChanger}>
          <div className={`${styles.lang} ${i18n.language === 'ru' ? styles.active : ''}`} onClick={() => i18n.changeLanguage('ru')}>RU</div>
          <div className={`${styles.lang} ${i18n.language === 'en' ? styles.active : ''}`} onClick={() => i18n.changeLanguage('en')}>EN</div>
        </div>
      </nav>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {loginVisible ? (
        <div className={styles.loginPage}>
          <h1 className={styles.cardTitle}>{t('auth.login')}</h1>
          <input type="text" placeholder={t('auth.email')} value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder={t('auth.password')} value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>{t('auth.enter')}</button>
          <p>{t('auth.noAccount')} <button onClick={() => setLoginVisible(false)}>{t('auth.registerBtn')}</button></p>
        </div>
      ) : (
        <div className={styles.regisPage}>
          <h1 className={styles.cardTitle}>{t('auth.register')}</h1>
          <input type="text" placeholder={t('auth.email')} value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder={t('auth.password')} value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleRegister}>{t('auth.done')}</button>
          <p>{t('auth.hasAccount')} <button onClick={() => setLoginVisible(true)}>{t('auth.enter')}</button></p>
        </div>
      )}
    </div>
  );
};
