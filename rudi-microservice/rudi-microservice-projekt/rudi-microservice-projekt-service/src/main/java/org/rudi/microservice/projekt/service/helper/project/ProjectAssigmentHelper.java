/**
 * RUDI Portail
 */
package org.rudi.microservice.projekt.service.helper.project;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;
import org.rudi.facet.acl.bean.User;
import org.rudi.facet.bpmn.helper.workflow.AbstractAssignmentHelper;
import org.rudi.microservice.projekt.storage.entity.project.ProjectEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

/**
 * @author FNI18300
 *
 */
@Component
public class ProjectAssigmentHelper extends AbstractAssignmentHelper<ProjectEntity> {

	@Value("${application.role.moderator.code}")
	@Getter
	private String moderatorRoleCode;

	@Override
	public List<String> computeAssignees(ProjectEntity assetDescription, String roleCode) {
		List<User> users = getAclHelper().searchUsers(roleCode);
		return users.stream().map(User::getLogin).collect(Collectors.toList());
	}

	@Override
	public String computeAssignee(ProjectEntity assetDescription, String roleCode) {
		List<String> assignees = computeAssignees(assetDescription, roleCode);
		if (CollectionUtils.isNotEmpty(assignees)) {
			return assignees.get(0);
		} else {
			return null;
		}
	}

}
