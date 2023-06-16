import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">+123456678</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Politica de privacidad
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terminos y condificiones
      </Typography.Link>
    </div>
  );
}
export default AppFooter;