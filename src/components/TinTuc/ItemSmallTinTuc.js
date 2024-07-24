import React from "react";

const ItemSmallTinTuc = ({ list }) => {
  return (
    <div class="col-sm-4 pl-0 pr-15">
      {list.map((o) => (
        <a
          class="jss111"
          href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
        >
          <div class="row mb-2">
            <div class="col-3 px-0">
              <img class="jss107" src={o.hinhAnh} alt="news-movie" />
            </div>
            <div class="col-9">
              <h6 class="text-secondary">{o.content}</h6>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ItemSmallTinTuc;
