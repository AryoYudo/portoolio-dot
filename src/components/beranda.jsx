import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Beranda.css'; // Optional: to add custom CSS styles

const Beranda = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Text Section */}
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
                    <div className="d-flex mt-4 ms-4 stats-section">
                        <div className="me-5 text-center">
                            <h1><strong> 20 </strong></h1>
                            <p>Projects</p>
                        </div>
                        <div className="text-center">
                            <h1><strong> 4B+ </strong></h1>
                            <p>Saving Cost</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-4 d-flex align-items-end justify-content-end image-section">
                    <div className="image-stack">
                        <img src="/home/1.png" alt="Digital Solutions Illustration 1" className="stacked-image" />
                        <img src="/home/2.png" alt="Digital Solutions Illustration 2" className="stacked-image" />
                        <img src="/home/3.png" alt="Digital Solutions Illustration 3" className="stacked-image" />
                        <img src="/home/4.png" alt="Digital Solutions Illustration 4" className="stacked-image" />
                        <img src="/home/5.png" alt="Digital Solutions Illustration 5" className="stacked-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beranda;
