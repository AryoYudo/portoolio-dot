import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';


const About = () => {
    const teamRoles = [
        {
            title: "Project Manager",
            description:
                "Leads projects by setting goals, scheduling, and budgeting. Coordinates teams, communicates with stakeholders, and resolves challenges to ensure on-time completion.",
            icon: "bi-people-fill", // gunakan ikon dari Bootstrap Icons
            color: "#E31F52",
        },
        {
            title: "UI/UX Designer",
            description:
                "Designs user-friendly, visually appealing digital experiences by focusing on layout, flow, and ease of use. Works with developers to create intuitive, attractive products that meet user needs.",
            icon: "bi-pencil-square",
            color: "#E31F52",
        },
        {
            title: "AI (Artificial Intelligence)",
            description:
                "Focuses on building machine learning models that help systems learn, adapt, and make smart decisions. These models improve decision-making, automate tasks, and add value to businesses and users.",
            icon: "bi-cpu",
            color: "#E31F52",
        },
        {
            title: "IoT",
            description:
                "Focuses on connecting devices to the internet to collect and exchange data. This helps automate processes and improve efficiency in areas that we are working on.",
            icon: "bi-wifi",
            color: "#E31F52",
        },
        {
            title: "Developer",
            description:
                "Developers design, build, and maintain software, writing code, creating features, and fixing issues. They work with teams to optimize performance and update software to meet user needs.",
            icon: "bi-code-slash",
            color: "#E31F52",
        },
        {
            title: "QA (Quality Assurance)",
            description:
                "QA ensures software meets standards by testing for bugs, reporting issues, and working with developers to fix problems, ensuring the software is reliable and ready for release.",
            icon: "bi-patch-check-fill",
            color: "#E31F52",
        },
    ];
    
    return (
        <div className="container my-5">
            <main className="row my-5">
                {/* Left Section: Image */}
                <motion.div initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 2}} viewport={{ once:true}} className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                        src="path-to-image.png"
                        alt="Platform Showcase"
                        className="img-fluid"
                    />
                </motion.div>

                {/* Right Section: Services */}
                <motion.div initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 2,  delay: 1}} viewport={{ once:true}} className="col-md-6">
                    {/* Title */}
                    <h2 className="fw-bold">
                        <span className="me-2" style={{color: "#E31F52"}}> ❖</span>Layanan Utama
                    </h2>
                    
                    {/* Services List */}
                    <ul className="list-unstyled mt-4">
                        {/* Service Item */}
                        <li className="d-flex align-items-start mb-3">
                            <span className="text-danger fs-4 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M2.99867 15.5C2.99867 16.2956 3.31474 17.0587 3.87735 17.6213C4.43996 18.1839 5.20302 18.5 5.99867 18.5C5.99867 19.163 6.26206 19.7989 6.7309 20.2678C7.19974 20.7366 7.83563 21 8.49867 21C9.16171 21 9.79759 20.7366 10.2664 20.2678C10.7353 19.7989 10.9987 19.163 10.9987 18.5C10.9987 19.163 11.2621 19.7989 11.7309 20.2678C12.1997 20.7366 12.8356 21 13.4987 21C14.1617 21 14.7976 20.7366 15.2664 20.2678C15.7353 19.7989 15.9987 19.163 15.9987 18.5C16.5305 18.5 17.0528 18.3587 17.5121 18.0904C17.9713 17.8222 18.351 17.4367 18.6122 16.9734C18.8734 16.5101 19.0067 15.9857 18.9986 15.4539C18.9904 14.9221 18.841 14.402 18.5657 13.947C19.2501 13.8147 19.8672 13.4483 20.3109 12.9107C20.7546 12.373 20.9973 11.6976 20.9973 11.0005C20.9973 10.3034 20.7546 9.62801 20.3109 9.09034C19.8672 8.55267 19.2501 8.18625 18.5657 8.054C18.8412 7.59894 18.9909 7.07877 18.9992 6.54684C19.0075 6.0149 18.8742 5.49032 18.6129 5.02687C18.3517 4.56343 17.9719 4.17778 17.5125 3.90948C17.0531 3.64117 16.5307 3.49985 15.9987 3.5C15.9987 2.83696 15.7353 2.20107 15.2664 1.73223C14.7976 1.26339 14.1617 1 13.4987 1C12.8356 1 12.1997 1.26339 11.7309 1.73223C11.2621 2.20107 10.9987 2.83696 10.9987 3.5C10.9987 2.83696 10.7353 2.20107 10.2664 1.73223C9.79759 1.26339 9.16171 1 8.49867 1C7.83563 1 7.19974 1.26339 6.7309 1.73223C6.26206 2.20107 5.99867 2.83696 5.99867 3.5C5.46682 3.49996 4.94451 3.6413 4.48527 3.90956C4.02603 4.17781 3.64635 4.56334 3.38515 5.02663C3.12394 5.48992 2.99059 6.01432 2.99877 6.54611C3.00694 7.0779 3.15635 7.59796 3.43167 8.053C2.74721 8.18525 2.13014 8.55167 1.68642 9.08934C1.2427 9.62701 1 10.3024 1 10.9995C1 11.6966 1.2427 12.372 1.68642 12.9097C2.13014 13.4473 2.74721 13.8137 3.43167 13.946C3.14816 14.4147 2.99841 14.9522 2.99867 15.5Z" stroke="#E31F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.49902 13.5L8.34102 7.974C8.38726 7.83609 8.47566 7.7162 8.59373 7.63126C8.7118 7.54632 8.85357 7.50062 8.99902 7.50062C9.14447 7.50062 9.28625 7.54632 9.40432 7.63126C9.52239 7.7162 9.61079 7.83609 9.65702 7.974L11.499 13.5M14.499 7.5V13.5M7.49902 11.5H10.499" stroke="#E31F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </span>
                            <div>
                                <h5>Artificial Intelligence (AI)</h5>
                                <p className="m-0">
                                    Solusi AI untuk mempercepat transformasi digital, mengotomatisasi proses utama, menganalisis data, dan memprediksi tren masa depan dengan akurat.
                                </p>
                            </div>
                        </li>

                        {/* Service Item */}
                        <li className="d-flex align-items-start mb-3">
                            <span className="text-danger fs-4 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13V22H3V13H5ZM23 13V15H21V22H19V15H17V13H23ZM12 11C13.4011 11.0076 14.7724 11.4055 15.96 12.149L17.407 10.699C15.8195 9.5957 13.9332 9.00299 12 9C10.0927 9.00356 8.23198 9.58972 6.667 10.68L8.116 12.133C9.2794 11.3999 10.6249 11.0074 12 11Z" fill="#E31F52"/>
                                <path d="M12.0005 7C14.4627 7.00554 16.8582 7.80123 18.8345 9.27L20.2615 7.84C17.8994 6.0026 14.993 5.00345 12.0005 5C9.03378 5.00354 6.15307 5.99662 3.81445 7.822L5.24045 9.252C7.1933 7.79453 9.56369 7.00487 12.0005 7Z" fill="#E31F52"/>
                                <path d="M12 2.99998C15.5231 3.00044 18.9405 4.20343 21.687 6.40998L23.114 4.98098C19.9958 2.41035 16.0812 1.00311 12.04 1.00001C7.99881 0.996904 4.0821 2.39814 0.959961 4.96398L2.38696 6.39298C5.11041 4.19848 8.50239 3.00125 12 2.99998ZM12 13C11.1099 13 10.2399 13.2639 9.4999 13.7584C8.75987 14.2528 8.1831 14.9556 7.8425 15.7779C7.50191 16.6002 7.41279 17.505 7.58643 18.3779C7.76006 19.2508 8.18864 20.0526 8.81798 20.682C9.44732 21.3113 10.2491 21.7399 11.1221 21.9135C11.995 22.0872 12.8998 21.998 13.722 21.6574C14.5443 21.3168 15.2471 20.7401 15.7416 20C16.236 19.26 16.5 18.39 16.5 17.5C16.5 16.3065 16.0259 15.1619 15.1819 14.318C14.338 13.4741 13.1934 13 12 13ZM12 20C11.5055 20 11.0222 19.8534 10.611 19.5787C10.1999 19.304 9.87948 18.9135 9.69026 18.4567C9.50104 17.9999 9.45153 17.4972 9.548 17.0123C9.64446 16.5273 9.88256 16.0818 10.2322 15.7322C10.5818 15.3826 11.0273 15.1445 11.5122 15.048C11.9972 14.9516 12.4999 15.0011 12.9567 15.1903C13.4135 15.3795 13.8039 15.6999 14.0786 16.1111C14.3533 16.5222 14.5 17.0055 14.5 17.5C14.5 18.163 14.2366 18.7989 13.7677 19.2677C13.2989 19.7366 12.663 20 12 20Z" fill="#E31F52"/>
                            </svg>
                            </span>
                            <div>
                                <h5>Internet of Things (IoT)</h5>
                                <p className="m-0">
                                    Integrasi IoT untuk pemantauan waktu nyata, kontrol yang lebih baik, dan pengambilan keputusan berbasis data yang lebih cepat.
                                </p>
                            </div>
                        </li>

                        {/* Service Item */}
                        <li className="d-flex align-items-start mb-3">
                            <span className="text-danger fs-4 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M6.5 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V11M15 19L17 17L15 15M12 15L10 17L12 19M6 2H8M7 15V15.01" stroke="#E31F52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </span>
                            <div>
                                <h5>Mobile App Development</h5>
                                <p className="m-0">
                                    Pengembangan aplikasi mobile untuk bisnis modern, berfokus pada pengalaman pengguna dan kinerja platform.
                                </p>
                            </div>
                        </li>

                        {/* Service Item */}
                        <li className="d-flex align-items-start mb-3">
                            <span className="text-danger fs-4 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M14.86 12.5C14.94 11.84 15 11.18 15 10.5C15 9.82 14.94 9.16 14.86 8.5H18.24C18.4 9.14 18.5 9.81 18.5 10.5C18.5 11.19 18.4 11.86 18.24 12.5M13.09 18.06C13.69 16.95 14.15 15.75 14.47 14.5H17.42C16.4512 16.1683 14.9141 17.432 13.09 18.06ZM12.84 12.5H8.16C8.06 11.84 8 11.18 8 10.5C8 9.82 8.06 9.15 8.16 8.5H12.84C12.93 9.15 13 9.82 13 10.5C13 11.18 12.93 11.84 12.84 12.5ZM10.5 18.46C9.67 17.26 9 15.93 8.59 14.5H12.41C12 15.93 11.33 17.26 10.5 18.46ZM6.5 6.5H3.58C4.53864 4.82703 6.07466 3.56124 7.9 2.94C7.3 4.05 6.85 5.25 6.5 6.5ZM3.58 14.5H6.5C6.85 15.75 7.3 16.95 7.9 18.06C6.07827 17.4323 4.54429 16.1682 3.58 14.5ZM2.76 12.5C2.6 11.86 2.5 11.19 2.5 10.5C2.5 9.81 2.6 9.14 2.76 8.5H6.14C6.06 9.16 6 9.82 6 10.5C6 11.18 6.06 11.84 6.14 12.5M10.5 2.53C11.33 3.73 12 5.07 12.41 6.5H8.59C9 5.07 9.67 3.73 10.5 2.53ZM17.42 6.5H14.47C14.1565 5.26161 13.6931 4.06611 13.09 2.94C14.93 3.57 16.46 4.84 17.42 6.5ZM10.5 0.5C4.97 0.5 0.5 5 0.5 10.5C0.5 13.1522 1.55357 15.6957 3.42893 17.5711C4.35752 18.4997 5.45991 19.2362 6.67317 19.7388C7.88642 20.2413 9.18678 20.5 10.5 20.5C13.1522 20.5 15.6957 19.4464 17.5711 17.5711C19.4464 15.6957 20.5 13.1522 20.5 10.5C20.5 9.18678 20.2413 7.88642 19.7388 6.67317C19.2362 5.45991 18.4997 4.35752 17.5711 3.42893C16.6425 2.50035 15.5401 1.76375 14.3268 1.2612C13.1136 0.758658 11.8132 0.5 10.5 0.5Z" fill="#E31F52"/>
                            </svg>
                            </span>
                            <div>
                                <h5>Web Development</h5>
                                <p className="m-0">
                                    Solusi digital inovatif dengan website cepat dan aman untuk interaksi tanpa hambatan dan manajemen online.
                                </p>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </main>

            {/* Visi Section */}
            <div className="text-center mb-5" >
                <motion.h3 initial={{ opacity: 0, y: 0}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 2, delay: 1.5}} viewport={{ once:true}}  className="fw-bold ">
                    <span className="me-2 text-danger">❖</span>Visi
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 0}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 2, delay: 2}} viewport={{ once:true}} className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                    "Menjadi pemimpin dalam transformasi operasi digital dengan memanfaatkan AI dan teknologi digital
                    untuk meningkatkan efisiensi, kelincahan, pengambilan keputusan berbasis data, serta membangun
                    budaya kerja yang inovatif dan kolaboratif demi keberlanjutan dan keunggulan kompetitif."
                </motion.p>
            </div>

            {/* Misi Section */}
            <div className="text-center">
                <motion.h3 initial={{ opacity: 0, y: 0}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 2, delay: 1}} viewport={{ once:true}} className="fw-bold ">
                    <span className="me-2 text-danger">❖</span>Misi
                </motion.h3>
                <div className="row mt-4">
                    {/* Misi Items */}
                    {[
                        {
                            number: 1,
                            title: "Meningkatkan Efisiensi Operasional dengan Teknologi Digital dan AI",
                            description:
                            "Memanfaatkan teknologi digital dan AI untuk menyederhanakan proses, mengurangi tugas manual, dan meningkatkan produktivitas.",
                        },
                        {
                            number: 2,
                            title: "Mendukung Pengambilan Keputusan dengan Data dan AI",
                            description:
                            "Menyediakan data akurat dan wawasan berbasis AI untuk pengambilan keputusan yang cepat dan tepat.",
                        },
                        {
                            number: 3,
                            title: "Mendorong Inovasi dengan AI dan Solusi Digital Tradisional",
                            description:
                            "Mengintegrasikan AI dengan teknologi digital untuk menciptakan solusi yang adaptif sesuai kebutuhan operasional.",
                        },
                        {
                            number: 4,
                            title: "Meningkatkan Kapasitas Organisasi",
                            description:
                            "Memperkuat kompetensi SDM untuk memastikan pemanfaatan maksimal teknologi modern.",
                        },
                        {
                            number: 5,
                            title: "Mengembangkan Kolaborasi Digital",
                            description:
                            "Membangun kemitraan strategis untuk mempercepat implementasi transformasi digital.",
                        },
                        {
                            number: 6,
                            title: "Menyediakan Solusi Ramah Lingkungan",
                            description:
                            "Menerapkan teknologi digital berkelanjutan untuk meminimalkan dampak lingkungan.",
                        },
                    ].map((misi, index) => (
                        <motion.div initial={{ opacity: 0, y: 0}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, delay: index * 2}} viewport={{ once:true}} key={index} className="col-md-4 mb-4">
                            <div className="d-flex align-items-start bg-white rounded shadow-sm p-3">
                                {/* Circle Number */}
                                <div
                                    className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
                                    style={{ width: "70px", height: "40px" }}
                                    >
                                    {misi.number}
                                </div>
                                {/* Text Content */}
                                <div className="card ms-3 shadow-sm border-0">
                                    <div className="card-body">
                                        <h6 className="fw-bold">{misi.title}</h6>
                                        <p className="mb-0">{misi.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">
                    <span className="me-2" style={{ color: "#E31F52" }}>❖</span>Team Core
                </h2>
                <p className="text-muted">
                    The core team is the central group responsible for driving strategy, making key decisions, and ensuring project success.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {teamRoles.map((role, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 border-0 shadow-sm p-3">
                            <div className="d-flex align-items-start">
                                {/* Icon */}
                                <span
                                    className="me-3 fs-2"
                                    style={{ color: role.color }}
                                >
                                    <i className={`bi ${role.icon}`}></i>
                                </span>
                                {/* Title and Description */}
                                <div>
                                    <h5 className="fw-bold">{role.title}</h5>
                                    <p className="text-muted m-0">{role.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default About;
