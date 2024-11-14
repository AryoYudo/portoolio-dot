import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Beranda = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Bagian Teks */}
                <div className="col-md-8">
                    <div className="d-flex flex-column">
                        <h1><strong>Future Tech: AI, IoT, and</strong></h1>
                        <h1><strong>Digital Solutions</strong></h1>
                        <p className="text-muted mt-3">
                            We are the Digital Operational Transformation team at PT Sat Nusaparsada Tbk, committed to delivering solutions
                            based on AI, IoT, mobile apps, and web development. We help businesses improve efficiency, quality, and operational
                            management with the latest digital technology.
                        </p>
                    </div>
                    <div className="d-flex mt-4 ms-4">
                        <div className="me-5 text-center">
                            <h1><strong> 20 </strong></h1>
                            <p> Project</p>
                        </div>
                        <div className="text-center">
                            <h1><strong> 4B+ </strong></h1>
                            <p>Saving Cost</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Gambar */}
                <div className="col-md-4 d-flex align-items-end justify-content-end ">
                    <img src="/home/1.png" alt="Digital Solutions Illustration" className="img-fluid" />
                    <img src="/home/2.png" alt="Digital Solutions Illustration" className="img-fluid" />
                    <img src="/home/3.png" alt="Digital Solutions Illustration" className="img-fluid" />
                    <img src="/home/4.png" alt="Digital Solutions Illustration" className="img-fluid" />
                    <img src="/home/5.png" alt="Digital Solutions Illustration" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Beranda;
