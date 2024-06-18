import "./Companies.scss";
import Logo1 from "../../assets/Logo1.png";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import Logo4 from "../../assets/Logo4.png";
import Logo5 from "../../assets/Logo5.png";
import Logo6 from "../../assets/Logo6.png";

function Companies() {
  return (
    <div className="companies">
      <div className="companies_container">
        <div className="companies_logos">
          <img src={Logo1} alt="Logo1" />
          <img src={Logo2} alt="Logo2" />
          <img src={Logo3} alt="Logo3" />
          <img src={Logo4} alt="Logo4" />
          <img src={Logo5} alt="Logo5" />
          <img src={Logo6} alt="Logo6" />
        </div>
        <div className="companies_line"></div>
      </div>
    </div>
  );
}

export default Companies;
