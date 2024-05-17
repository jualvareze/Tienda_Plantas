import "./producto.css";

const Producto = () => {
  return (
    <div className="producto">
      <img
        className="imagen-producto"
        src="src/component/Productos/img/aloe_vera.jpeg"
        alt=""
      />
      <div className="detalle-producto">
        <h2>titulo_producto</h2>
        <span className="precio-producto">$3000</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          maiores hic labore exercitationem delectus consectetur similique
          provident voluptatibus impedit. Officiis nisi minus nulla consectetur.
          Eius quaerat inventore porro accusamus at. In labore voluptas eveniet
          et itaque vel alias quos molestiae, earum esse. Veniam iure adipisci
          omnis? Corrupti dolorem natus sequi.
        </p>
        <button className="btn-addcarrito">añadir al carrito</button>
      </div>
    </div>
  );
};
export default Producto;
