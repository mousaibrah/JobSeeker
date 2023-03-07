import React from "react";
import { Button } from "react-bootstrap";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
const PostBox = () => {
  return (
    <MDBCard>
      <MDBRow>
        <MDBCol lg="1">
          <MDBCardImage
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            className="rounded-circle"
            style={{ width: "35px" }}
            fluid
          />
        </MDBCol>
        <MDBCol lg="11">
          <MDBCardTitle>Post</MDBCardTitle>
        </MDBCol>
      </MDBRow>
      <MDBCardBody>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        reprehenderit velit laudantium tenetur eius officiis numquam culpa
        harum, sequi itaque inventore commodi alias aliquam deleniti molestiae
        facilis consequatur quasi ea! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam esse fugit dolorum suscipit ipsum odio at modi
        corporis eius ipsam, doloribus excepturi culpa eos ea inventore
        deserunt! Eligendi, cumque sint. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos, officiis molestiae. Vitae, autem reiciendis.
        Dignissimos inventore accusamus laborum placeat consequatur soluta
        aliquam nemo. Quam cumque voluptatibus officia quibusdam harum nisi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        accusamus, fugit ipsum officiis porro dolorem minima in eligendi optio!
        Perferendis fugit at reiciendis deserunt sit soluta alias voluptates
        odio officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Unde, at facilis illum minima culpa sequi animi amet reiciendis, neque
        itaque dolores architecto. Eaque voluptatibus tenetur ad vel?
        Necessitatibus, labore illo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni, assumenda debitis aliquid harum nulla ducimus
        optio error repellendus at vitae dolorem quo rem similique voluptas
        labore perferendis consectetur delectus sit. ;Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius natus repellendus ipsum corrupti.
        Obcaecati vero modi magni ipsam perspiciatis autem, nihil tempora nisi.
        Fuga eaque at error eum earum quaerat. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Iste quasi cumque nam quam omnis, a rem
        labore in libero expedita? Consequuntur at illo quam, iusto doloremque
        incidunt odio voluptatibus harum! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Et, praesentium tempore voluptatum
        distinctio molestias autem qui quo inventore temporibus. Iusto numquam,
        facere dignissimos unde suscipit praesentium quidem fuga quas cumque.lo
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
        blanditiis fuga, veniam facere dolorum nostrum accusamus. Illo itaque
        officiis soluta deleniti corrupti a, incidunt earum saepe quasi
        voluptatem impedit ipsa? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Consequuntur perspiciatis illo voluptatum quasi beatae
        error mollitia dolore? Minima perferendis minus nihil, corrupti dicta
        esse dolor, explicabo atque enim nulla dolores! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Sit velit, sed facilis animi commodi
        voluptate assumenda natus distinctio neque possimus iure ad earum beatae
        voluptates temporibus corrupti accusamus officia! Deleniti! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit, laboriosam deleniti
        aspernatur aliquam doloremque, nobis voluptatem maiores placeat maxime
        voluptate, itaque mollitia earum. Cupiditate tempore, eligendi incidunt
        totam natus nostrum? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Assumenda nisi culpa sunt voluptate aperiam facilis, aspernatur ex
        libero earum ab quos rerum, officia corrupti quisquam iusto mollitia et
        vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error
        numquam! Deleniti quidem autem odit, facere sit repellendus amet sequi
        excepturi? Quod, praesentium?
      </MDBCardBody>
      <MDBCardFooter>
        <Button>Apply</Button>
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PostBox;
