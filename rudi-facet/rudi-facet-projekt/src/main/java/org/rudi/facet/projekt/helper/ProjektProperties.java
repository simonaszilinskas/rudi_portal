package org.rudi.facet.projekt.helper;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;
import lombok.Setter;

@Configuration
@ConfigurationProperties(prefix = "rudi.projekt")
@Getter
@Setter
@SuppressWarnings("java:S1075") // Les URL par défaut des paramètres sont obligatoirement en dur dans le code
public class ProjektProperties {
	/**
	 * URL de base pour appeler le micro-service Strukture via Load Balancer
	 */
	private String serviceBaseUrl = "lb://RUDI-PROJEKT/projekt/v1/";

	private String notificationsPath = "/notify/organization/{organizationUuid}/member/{userUuid}";
	/**
	 * URL de base de l'API projekt (cf basePath dans le fichier rudi-projekt-api.json)
	 */
	private String baseUrl = "lb://RUDI-PROJEKT/projekt/v1";

	private String hasAccessToDatasetPath = "/owner-info/{ownerUuid}/dataset-access/{datasetUuid}";

	private String linkedDatasetOwnerPath = "/owner-info/{linkedDatasetUuid}";

}
