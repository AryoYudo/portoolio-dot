import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TeamCulture = () => {
  return (
    <Container className="my-5">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="mb-3">OUR TEAM CULTURE</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#AdaptiveLeadership</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#StartupVisionary</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#InnoMaestro</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#TeamAgility</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#UsersObsessed</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#VelocityDecisionMaking</h4>
        </div>
        <hr style={{ borderTop: '2px solid', margin: '10px 0' }} />
      </div>


      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="/ourteam/diner.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
          <h3 className="fw-bold">Team Achievement Dinner</h3>
          <p>
            Tim DOT merayakan kesuksesan menyelesaikan proyek dengan kebersamaan
            dalam makan malam yang hangat. Tawa, cerita sukses, dan apresiasi
            mengalir di antara anggota tim, menciptakan momen penuh semangat
            dan inspirasi. Ini menjadi pemicu bagi kami untuk menghadapi
            tantangan proyek berikutnya dengan antusiasme yang lebih besar.
          </p>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Morning Scrum Meeting</h3>
          <p>
            Setiap Pagi, Team kami mengadakan rapat harian untuk menyelaraskan tugas dan target harian.
            Rapat ini memastikan anggota memahami peran dan tangguang jawab mereka, serta mengidentifikasikan 
            prioritas utama hari itu. Dengan komunikasi yang terbuka,rapat ini menjaga kordinasi yang baik antar team,
            meminimalkan hambatan, dan memastikan semua, anggota siap bekerja menuju tujuan yang sama dengan fokus yang jelas.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="/ourteam/scrum.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="/ourteam/holiday.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
          <h3 className="fw-bold">Holiday</h3>
          <p>
          Kebersamaan Tim DOT tercermin dalam setiap momen, mulai dari liburan bersama hingga perayaan hari-hari besar. Kegiatan ini bukan hanya sebagai ajang rekreasi, tetapi juga sebagai kesempatan untuk membangun keakraban antar anggota tim. Momen-momen ini mempererat hubungan, memperkuat rasa saling percaya, dan menciptakan semangat kolaborasi yang solid. Dengan sinergi yang kuat, tim semakin kompak dalam menghadapi setiap tantangan proyek yang datang.
          </p>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Sharing Session</h3>
          <p>
          Setiap Jumat sore, tim kami rutin mengadakan sesi berbagi pengetahuan, ide, dan pengalaman. Dalam suasana yang santai namun produktif, anggota tim saling bertukar wawasan untuk meningkatkan keterampilan masing-masing. Kegiatan ini juga menjadi sarana untuk memperkuat kolaborasi, mendorong inovasi, dan membangun rasa saling mendukung dalam mencapai tujuan bersama. Melalui sesi ini, tim terus berkembang dan siap menghadapi tantangan dengan pengetahuan yang lebih luas.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="/ourteam/sharing.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="/ourteam/icebreaking.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
          <h3 className="fw-bold">Ice Breaking</h3>
          <p>
          Sebagai bagian dari dinamika Tim DOT, kami rutin melakukan sesi ice breaking sebelum memulai rapat atau kegiatan besar. Ice breaking ini bertujuan mencairkan suasana, membangun keakraban, dan mendorong interaksi yang lebih santai di antara anggota Tim DOT. Dengan berbagai permainan dan aktivitas ringan, setiap anggota merasa lebih nyaman, terbuka, dan terhubung satu sama lain. Ini tidak hanya meningkatkan suasana kerja yang positif, tetapi juga memperkuat kolaborasi dan komunikasi, menjadikan Tim DOT lebih solid dan siap bekerja sama secara efektif dalam menghadapi setiap tantangan.
          </p>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Team Bonding</h3>
          <p>
          Sebagai bagian dari dinamika Tim DOT, kami merayakan kegiatan besar Team Boanding. Team Bonding ini bertujuan mencairkan suasana, membangun keakraban, dan mendorong interaksi yang lebih santai di antara anggota Tim DOT. Dengan berbagai permainan dan aktivitas ringan, setiap anggota merasa lebih nyaman, terbuka, dan terhubung satu sama lain. Ini tidak hanya meningkatkan suasana kerja yang positif, tetapi juga memperkuat kolaborasi dan komunikasi, menjadikan Tim DOT lebih solid dan siap bekerja sama secara efektif dalam menghadapi setiap tantangan.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="/ourteam/bonding.png" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>
      
    </Container>
  );
};

export default TeamCulture;
