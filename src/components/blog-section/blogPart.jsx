import "./blogPart.scss";

export default function App() {
  return (
    <>
      <section className="blogSection">
        <div className="blogTop">
          <img
            src="https://cdn.eichholtz.com/media/wysiwyg/3/d/3dkey.jpg"
            alt="img"
          />{" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptatibus praesentium alias dolores error deleniti quidem facere
            quisquam
          </p>
        </div>

        <div className="blogMiddle">
          <div className="blogMiddle_1">
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/rev-2b3fe8f/online-decorating/wp-content/uploads/2021/05/Inviting-natural-sunlight-in-modern-lighting-interior-design.jpg"
              alt="img"
            />
            <p>Impedit maiores alias dolores </p>
          </div>

          <div className="blogMiddle_2">
            <img
              src="https://interiordesign.net/wp-content/uploads/2022/03/Interior-Design-Andrea-Rodman-Interiors-Victoria-British-Columbia-1.-AndreaRodman_OakBay-_1442-EDITED.jpg"
              alt="img"
            />
            <p>Asperiores magnam quis optio ratione</p>
          </div>
          <div className="blogMiddle_3">
            <img
              src="https://mydecorative.com/wp-content/uploads/2020/02/Unique-Interior-Design.jpg"
              alt="img"
            />
            <p>Asperiores magnam quis optio ratione</p>
          </div>
        </div>

        <div className="blogBottom"></div>
        <button className="blogSeeAllBtn">
          <span> See all ⇢</span>
        </button>
      </section>
    </>
  );
}
