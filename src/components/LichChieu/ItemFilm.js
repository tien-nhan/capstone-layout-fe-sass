import React from "react";
import Rating from "@mui/material/Rating";

const ItemFilm = ({ data, handleOpenVideo }) => {
  return (
    <div className="align-top item-film">
      <div style={{ padding: "7px", cursor: "pointer" }}>
        <div className="film">
          <div className="film__img">
            <div
              className="film__poster jss135"
              style={{ backgroundImage: `url(${data.hinhAnh})` }}
            >
              <div class="film__overlay" />
              <div class="play__trailer">
                <div class="jss124 jss151 play">
                  <img
                    src="/images/play-video.png"
                    class="jss125"
                    alt="play"
                    onClick={handleOpenVideo(data.trailer)}
                  />
                </div>
              </div>
            </div>
            <div className="jss138">
              <p className="jss139">{data?.danhGia}</p>
              <p className="jss140">
                <Rating
                  className="jss141"
                  value={5}
                  precision={0.5}
                  classes={{
                    iconFilled: "jss142",
                  }}
                />
              </p>
            </div>
          </div>
          <div class="film__content">
            <div class="film__name ">
              <div class="name">
                <p>
                  <span class="c18">{data?.maNhom}</span>
                  {data?.tenPhim}
                </p>
              </div>
              <p class="pt-2">
                <span class="text_info">120 phút - Tix 10</span>
              </p>
            </div>
            <div class="film__button">
              <a href={`/phim/${data.maPhim}`}>MUA VÉ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFilm;
