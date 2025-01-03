import React, { useState } from 'react';
import './index.css';
import BannerImage from 'Pictures/sehir.jpg';
import { Helmet } from 'react-helmet';
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GirisKayit = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'asd@asd' && password === '123') {
            setIsLoggedIn(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/')
            toast.success('giriş başarılı', {
                theme: 'dark',
            })
        } else {
            toast.error('yanlış', {
                theme: 'dark',
            })

        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        toast.success('kayıt başarılı', {
            theme: 'dark',
        })
        setPassword('');
        setEmail('');
        setIsRegistering(false);
    };


    return (
        <div className='login' style={{ backgroundImage: `url(${BannerImage})` }}>
            <Helmet>
                <title>{isRegistering ? 'Kayıt Ol' : 'Giriş'}</title>
            </Helmet>
            <div className='wrapper'>
                {!isRegistering ? (
                    <form onSubmit={handleLogin}>
                        <h1>Giriş</h1>
                        <div className='input-box'>
                            <input
                                type="email"
                                placeholder="E-posta"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <FaUser className='icon' />

                        </div>
                        <div className='input-box'>
                            <input
                                type="password"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type="checkbox" />Beni hatırla</label>
                            <a href="#">Şifreni mi unuttun?</a>
                        </div>
                        <button type='submit'>Giriş yap</button>
                        <div className='register-link'>
                            <p>Hesabın yok mu? <a href='#' onClick={() => setIsRegistering(true)}>Kayıt ol</a></p>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleRegister}>
                        <h1>Kayıt ol</h1>
                        <div className='input-box'>
                            <input
                                type="email"
                                placeholder="E-posta"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box'>
                            <input
                                type="password"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type="checkbox" />Şartları kabul ediyorum</label>
                        </div>
                        <button type='submit'>Kayıt ol</button>
                        <div className='register-link'>
                            <p>Zaten bir hesabın var mı? <a href='#' onClick={() => setIsRegistering(false)}>Giriş yap</a></p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default GirisKayit;
