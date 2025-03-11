import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama} {""}
            <strong>
              (Rp. {numberWithCommas(keranjangDetail.product.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
              <Form.Label>Jumlah :</Form.Label>
              <br></br>
              <Button
                variant="primary"
                size="sm"
                style={{ marginRight: "4px" }}
                onClick={() =>tambah()}
              >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Button>
              <stong>{jumlah}</stong>
              <Button variant="primary" size="sm" style={{ marginLeft: "4px" }} onClick={() =>kurang()}>
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </Button>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga: </Form.Label>
              <p>
                <strong>
                  Rp. {numberWithCommas(totalHarga)}
                </strong>
              </p>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="keterangan"
                placeholder="Contoh: Pedas"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
        <div className="d-grid">
            <Button variant="primary" type="submit" className="mt-2" size="lg">
                Simpan
            </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>{' '}Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
