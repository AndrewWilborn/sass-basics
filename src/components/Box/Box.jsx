export default function Box() {

  return (
    <div className="box-container">
      <h1>Box H1</h1>
      <h2>Box H2</h2>
      <h3>Box H3</h3>

      <div className="box-child">
        <h4>Box Child h4</h4>
        <div className="box-grandchild">
          <p>Box Grandchild</p>
        </div>
      </div>

      <div className="box-sibling">
        <h4>Box Sibling</h4>
        <div className="box-grandchild">
          <p>Box Grandchild</p>
        </div>
      </div>
    </div>
  )
}