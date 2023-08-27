import { withAuthenticationRequired } from "@auth0/auth0-react";

// This component takes another React component as  props and checks if the user is authenticated. If so, use that route. Otherwise, the user will be redirected to the auth0 login page.

interface ComponentProps {
	componentAsProps: React.ComponentType<any>;
}
export const AuthenticationGuard: React.FC<ComponentProps> = ({
	componentAsProps
}) => {
	const ComponentWithAuth = withAuthenticationRequired(componentAsProps, {
		onRedirecting: () => (
			<div>
				<h1>Hello this is the redirect</h1>
			</div>
		)
	});
	return <ComponentWithAuth />;
};
