
import { Button } from "../components";

export const ButtonsComponents = () => {

  return (
    <>
    <section className="buttonsConteiner">
      <h2>Button components</h2>
      
      <section className="grup">
        <h2>Variants</h2>
    <hr/>
        <div className="buttonstype">
          <Button />
          <Button type="outline" />
          <Button type="text" />
        </div>
      </section>

      <section className="grup">
        <h2>Other</h2>
        <hr/>
        <div className="buttonstype">
          <Button type="disabledShadow" />
          <Button type="disabled" />
          <Button type="disabled-Text" />
        </div>
      </section>

      <section className="grup">
        <h2>Iconos</h2>
        <hr/>
        <div className="buttonstype">
          <Button icon="shopping_cart" type="startIcon" />
          <Button icon="shopping_cart" type="endIcon" />
          <Button icon="search" type="startIcon" />
          <Button icon="search" type="endIcon" />
          <Button icon="account_circle" type="startIcon" />
          <Button icon="account_circle" type="endIcon" />
          <Button icon="login" type="startIcon" />
          <Button icon="logout" type="endIcon" />

          <Button icon="check_circle" type="startIcon" />
          <Button icon="check_circle" type="endIcon" />
          <Button icon="mail" type="startIcon" />
          <Button icon="mail" type="endIcon" />
        </div>
      </section>

      <section className="grup">
        <h2>Sizes</h2>
        <hr/>
        <div className="buttonstype">
          <Button type="sm" />
          <Button type="md" />
          <Button type="lg" />
        </div>
      </section>
      <section className="grup">
        <h2>Colors</h2>
        <hr/>
        <div className="buttonstype">
          <Button type="primary" />
          <Button type="secondary" />
          <Button type="danger " />
        </div>
      </section>
    </section>
    </>
  );
};
