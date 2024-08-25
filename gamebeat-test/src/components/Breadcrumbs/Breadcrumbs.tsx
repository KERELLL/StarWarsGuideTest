import {
  Breadcrumbs as MaterialBreadcrumbs,
  Theme,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface BreadcrumbsProps {
  crumbs: { link: string; title: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const theme = useTheme() as Theme;
  return (
    <MaterialBreadcrumbs aria-label="breadcrumb">
      {crumbs.map((crumb) => {
        return (
          <NavLink
            key={crumb.title}
            to={crumb.link}
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: theme.palette.action.active,
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            {crumb.title}
          </NavLink>
        );
      })}
    </MaterialBreadcrumbs>
  );
};

export default Breadcrumbs;
