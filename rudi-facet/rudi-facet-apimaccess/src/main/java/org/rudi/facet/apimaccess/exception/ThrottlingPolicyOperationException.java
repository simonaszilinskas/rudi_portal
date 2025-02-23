package org.rudi.facet.apimaccess.exception;

import org.rudi.facet.apimaccess.bean.PolicyLevel;
import org.rudi.facet.apimaccess.bean.SearchCriteria;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class ThrottlingPolicyOperationException extends APIManagerException {
	public ThrottlingPolicyOperationException(@Nonnull SearchCriteria searchCriteria, @Nonnull PolicyLevel policyLevel, @Nullable String username, @Nonnull Throwable cause) {
		super(String.format("Error with policyLevel=%s for username=%s and searchCriteria=%s", policyLevel, username, searchCriteria), cause);
	}

	public ThrottlingPolicyOperationException(@Nonnull String policyName, @Nonnull PolicyLevel policyLevel, @Nullable String username, @Nonnull Throwable cause) {
		super(String.format("Error with policyLevel=%s for username=%s and policyName=%s", policyLevel, username, policyName), cause);
	}

	public ThrottlingPolicyOperationException(SearchCriteria searchCriteria, PolicyLevel policyLevel) {
		super(String.format("Error with policyLevel=%s and searchCriteria=%s", policyLevel, searchCriteria));
	}
}
