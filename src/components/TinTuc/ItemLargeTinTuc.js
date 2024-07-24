import React from "react";

const ItemLargeTinTuc = ({ data }) => {
  return (
    <div className="jss113">
      <a
        href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"
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

export default ItemLargeTinTuc;
