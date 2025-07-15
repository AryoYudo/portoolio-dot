import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginAdmin = () => {
    const [badge, setBadge] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/auth/login', {
                badge,
                password,   
            });

            if (res.data.status_code === 200) {
                const { accessToken, refreshToken, user_name, uuid } = res.data.data;

                // Simpan token & data user ke localStorage
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('userName', user_name);
                localStorage.setItem('userUUID', uuid);

                // Tampilkan notifikasi sukses
                Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    text: `Selamat datang, ${user_name}!`,
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    navigate('/project');
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal',
                    text: res.data.message || 'Periksa kembali badge dan password Anda.'
                });
            }
        } catch (err) {
            console.error(err);

            if (err.response && err.response.data) {
                const { message } = err.response.data;

                Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal',
                    text: message || 'Terjadi kesalahan saat login.'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Terjadi Kesalahan',
                    text: 'Gagal menghubungi server atau terjadi masalah teknis.'
                });
            }
        }

    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="bg-white p-5 shadow rounded-4" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="mb-4">
                    <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
                </div>

                <h4 className="fw-bold">Admin Sign In</h4>
                <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                    Sign in to manage and personalize DOT Site
                </p>

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="badge" className="form-label fw-semibold">Badge</label>
                        <input type="text" className="form-control" id="badge" value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="Badge" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Fill your password here"
                            required
                        />
                    </div>
                    <button type="submit" className="btn w-100 text-white fw-bold" style={{ backgroundColor: '#E31F52' }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;
