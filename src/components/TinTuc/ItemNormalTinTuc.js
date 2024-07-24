import React from "react";

const ItemNormalTinTuc = ({ data }) => {
  return (
    <div class="col-sm-4 pl-0 pr-15">
      <a
        href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
        class="jss111"
      >
        <img class="jss107" src={data.hinhAnh} alt="news-movie" />
        <div class="py-3">
          <h4 class="card-title">{data.title}</h4>
          <p class="text-secondary">{data.content}</p>
        </div>
      </a>
    </div>
  );
};

export default ItemNormalTinTuc;
