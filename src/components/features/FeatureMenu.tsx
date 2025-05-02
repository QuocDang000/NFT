import "./featureMenu.scss";

interface Feature {
  icon: string;
  label: string;
  badge?: string;
}

interface FeatureMenuProps {
  features: Feature[];
}

export const FeatureMenu = ({ features }: FeatureMenuProps) => {
  return (
    <div className="feature-menu">
      {features.map((item, index) => (
        <div className="feature-item" key={index}>
          <div className="icon-wrapper">
            <img src={item.icon} alt={item.label} />
            {item.badge && <span className="badge">{item.badge}</span>}
          </div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};
