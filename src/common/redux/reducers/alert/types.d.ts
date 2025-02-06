type AlertData = {
  isShown: boolean;
  type: 'error' | 'warning';
  label: string;
};

type Alert = {
  alertData: AlertData;
};
