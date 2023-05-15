import "./iconLang.css";
import IconLAngImg from '../../../../assets/images/icon-languages.png'
const IconLang = () => {
  return (
    <div
      className="PamphletWidget clearfix icon-lang"
      data-contentlayout="stack"
      data-transitionstyle="fading"
    >
      <div className="ThumbGroup clearfix grpelem img-logo-containe" >
              <img
                src={IconLAngImg}
              />
       
      </div>
    </div>
  );
};
export default IconLang;
